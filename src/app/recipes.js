import { v4 as uuidv4 } from 'uuid';

let recipes = [
  { id: 1, title: 'Receita 1', description: 'Descrição 1', ingredients: ['Ingrediente 1', 'Ingrediente 2'] },
  { id: 2, title: 'Receita 2', description: 'Descrição 2', ingredients: ['Ingrediente 3', 'Ingrediente 4'] },
];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(recipes);
  } else if (req.method === 'POST') {
    const newRecipe = { id: uuidv4(), ...req.body };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
