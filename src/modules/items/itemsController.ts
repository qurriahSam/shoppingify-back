import { Request, Response, NextFunction } from 'express';
import { Category } from './itemsModel';

export const getItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const items = await Category.find();
    res.json(items);
  } catch (error) {
    next(error);
  }
};

export const addItem = async (req: Request, res: Response, next: NextFunction) => {
  let category;

  //  console.log(req.body);

  if (!req.body.category) {
    return next(new Error('category cannot be empty'));
  }

  if (!req.body.categoryId) {
    category = new Category({
      category: req.body.category,
      items: [req.body.item],
    });
    try {
      const saveCategory = await category.save();
      res.status(200).json(saveCategory);
    } catch (error) {
      next(error);
    }
  } else {
    try {
      const updateCategory = await Category.findByIdAndUpdate(
        req.body.categoryId,
        { $push: { items: req.body.item } },
        { new: true }
      );

      res.status(200).json({
        _id: updateCategory?._id,
        category: updateCategory?.category,
        items: [updateCategory?.items.slice(-1)[0]],
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
