import Express from 'express';
import { Category } from './itemsModel';

export const getItems = (req: Express.Request, res: Express.Response) => {
  res.send('Home');
};

export const postItems = async (req: Express.Request, res: Express.Response) => {
  const category = new Category({
    category: req.body.category,
    items: [],
  });

  try {
    const saveCategory = await category.save();
    res.status(200).json({
      category: saveCategory.category,
      _id: saveCategory._id.toString(),
    });
    console.log(saveCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
