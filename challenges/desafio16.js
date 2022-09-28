db.produtos.updateOne({ nome: { $eq: "Big Mac" } }, { $set: { ultimaModificacao: Date() } });

db.produtos.find(
  { ultimaModificacao: { $exists: 1 } },
  { _id: 0, nome: 1 },
);