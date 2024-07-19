export default function handler(req, res) {
    const { id } = req.query;
    const recipes = [
      { id: 1, title: 'Receita 1', description: 'Descrição 1', ingredients: ['Ingrediente 1', 'Ingrediente 2'] },
      { id: 2, title: 'Receita 2', description: 'Descrição 2', ingredients: ['Ingrediente 3', 'Ingrediente 4'] },
    ];
    const recipe = recipes.find(recipe => recipe.id == id);
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Receita não encontrada' });
    }
  }
  