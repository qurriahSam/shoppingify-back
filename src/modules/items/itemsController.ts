import { Request, Response, NextFunction } from 'express';
import { Category } from './itemsModel';

export const getItems = async (req: Request, res: Response) => {
  const items = await Category.find();
  res.json(items);
};

export const addItem = async (req: Request, res: Response, next: NextFunction) => {
  let category;

  if (!req.body.category) {
    return next(new Error('category cannot be empty'));
  }

  if (!req.body._id) {
    category = new Category({
      category: req.body.category,
      items: [req.body.item],
    });
    try {
      const saveCategory = await category.save();
      res.status(200).json(saveCategory);
      console.log(saveCategory);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const updateCategory = await Category.findByIdAndUpdate(
        req.body._id,
        { $push: { items: req.body.item } },
        { new: true }
      );
      res.status(200).json(updateCategory);
    } catch (error) {
      next(error);
    }
  }
};
