const prisma = require('../database')

class AdsController {

  
  // INSERIR ANÚNCIO
  async create(req, res) {
    try {

      const { titulo, subtitulo, descricao } = req.body

      const ads = await prisma.ads.create({
        data: {
          titulo,
          subtitulo,
          descricao
        }
      })

      return res.status(201).json(ads)

    } catch (error) {

      console.log(error)

      return res.status(500).json({
        error: 'Erro ao criar anúncio'
      })
    }
  }

// -----------------------------
// LISTAR TODOS 
async getAll(req, res) {
  try {
    const ads = await prisma.ads.findMany()

    return res.json(ads)

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Erro ao buscar anúncios'
    })
  }
}

// ----------------------------------------------
// LISTAR POR ID

async getById(req, res) {
  try {
    const { id } = req.params

    const ads = await prisma.ads.findUnique({
      where: {
        id: Number(id)
      }
    })

    if (!ads) {
      return res.status(404).json({ error: 'Anúncio não encontrado' })
    }

    return res.json(ads)

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Erro ao buscar anúncio'
    })
  }
}

// -------------------------------------
// ATUALIZAR 

async update(req, res) {
  try {
    const { id } = req.params
    const { titulo, subtitulo, descricao } = req.body

    const ads = await prisma.ads.update({
      where: { id: Number(id) },
      data: {
        titulo,
        subtitulo,
        descricao
      }
    })

    return res.json(ads)

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Erro ao atualizar anúncio'
    })
  }
}

// ----------------------------------------------
// ATUALIZAR DADOS 

async update(req, res) {
  try {
    const { id } = req.params
    const { titulo, subtitulo, descricao } = req.body

    const ads = await prisma.ads.update({
      where: { id: Number(id) },
      data: {
        titulo,
        subtitulo,
        descricao
      }
    })

    return res.json(ads)

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Erro ao atualizar anúncio'
    })
  }
}

// ----------------------------------------------- 
// EXCLUSÃO DE DADOS

async delete(req, res) {
  try {
    const { id } = req.params

    await prisma.ads.delete({
      where: { id: Number(id) }
    })

    return res.json({ message: 'Anúncio deletado com sucesso' })

  } catch (error) {
    console.log(error)

    return res.status(500).json({
      error: 'Erro ao deletar anúncio'
    })
  }
}

// ------------------------------------------------



}

module.exports = new AdsController()