import { Request, Response, NextFunction } from 'express'
import { Category } from './itemsModel'

export const getItems = (req: Request, res: Response) => {
  res.send('Home')
}

export const postItems = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.category) {
    return next(new Error('category cannot be empty'))
  }

  const category = new Category({
    category: req.body.category,
    items: []
  })

  try {
    const saveCategory = await category.save()
    res.status(200).json({
      category: saveCategory.category,
      _id: saveCategory._id.toString()
    })
    console.log(saveCategory)
  } catch (error) {
    next(error)
  }
}
