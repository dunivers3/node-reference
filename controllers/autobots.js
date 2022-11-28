let { transformers } = require("../data")

//GET
const getAutobot = (req, res) => {
  res.status(200).json({ success: true, data: transformers })
}

//POST
const createAutobot = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(401).json({ success: false, msg: "Cannont parse! Provied a name value!" })
  }
  res.status(201).json({ success: true, transformer: name })
}

//POST ==> postman
const createAutobotPostman = (req, res) => {
  const { name } = req.body
  if (!name) {
    return res.status(401).json({ success: false, msg: "Cannont parse! Provide a name value!" })
  }
  res.status(201).json({ success: true, data: [...transformers, name] })
}

//PUT
const updateAutobot = (req, res) => {
  const { id } = req.params
  const { name } = req.body

  const transformer = transformers.find((transformer) => transformer.id === Number(id))

  if (!transformer) {
    return res.status(404).json({ success: false, msg: `no person with id of ${id}` })
  }

  const newTransformers = transformers.map((transformer) => {
    if (transformer.id === Number(id)) {
      transformer.name = name
    }
    return transformer
  })
  res.status(200).json({ success: true, data: newTransformers })
}

//DELETE
const deleteAutobot = (req, res) => {
  const transformer = transformers.find((transformer) => transformer.id === Number(req.params.id))

  if (!transformer) {
    return res.status(404).json({ success: false, msg: `cannot remove ${req.params.id}, it does not exist!` })
  }

  const newTransformer = transformers.filter((transformer) => transformer.id !== Number(req.params.id))
  return res.status(200).json({ success: true, data: newTransformer })
}

module.exports = {
  getAutobot,
  createAutobot,
  createAutobotPostman,
  updateAutobot,
  deleteAutobot
}
