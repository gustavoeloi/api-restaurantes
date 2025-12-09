import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("products").del();

  // Inserts seed entries
  await knex("products").insert([
    { name: "Cerveja Skol Lata 350ml", price: 6.0 },
    { name: "Cerveja Brahma Lata 350ml", price: 6.0 },
    { name: "Cerveja Heineken Long Neck 330ml", price: 12.0 },
    { name: "Cerveja Budweiser Long Neck 330ml", price: 10.0 },
    { name: "Caipirinha de Limão", price: 18.0 },
    { name: "Caipiroska de Morango", price: 22.0 },
    { name: "Refrigerante Coca-Cola Lata", price: 6.0 },
    { name: "Refrigerante Guaraná Antarctica Lata", price: 6.0 },
    { name: "Água Mineral com Gás", price: 4.0 },
    { name: "Água Mineral sem Gás", price: 4.0 },
    { name: "Porção de Batata Frita", price: 25.0 },
    { name: "Porção de Calabresa Acebolada", price: 28.0 },
    { name: "Porção de Frango à Passarinho", price: 32.0 },
    { name: "Porção de Torresmo", price: 30.0 },
    { name: "Porção de Mandioca Frita", price: 24.0 },
    { name: "Pastel de Carne (6 unidades)", price: 20.0 },
    { name: "Pastel de Queijo (6 unidades)", price: 20.0 },
    { name: "Bolinho de Bacalhau (6 unidades)", price: 26.0 },
    { name: "Bolinho de Feijoada (6 unidades)", price: 25.0 },
    { name: "Espetinho de Frango", price: 10.0 },
    { name: "Espetinho de Carne", price: 12.0 },
    { name: "Espetinho de Queijo Coalho", price: 10.0 },
    { name: "Hambúrguer Artesanal", price: 28.0 },
    { name: "Sanduíche de Pernil", price: 24.0 },
    { name: "Tábua de Frios", price: 48.0 },
    { name: "Porção de Polenta Frita", price: 23.0 },
    { name: "Dose de Cachaça Artesanal", price: 8.0 },
    { name: "Dose de Whisky Red Label", price: 20.0 },
    { name: "Suco Natural de Laranja", price: 10.0 },
    { name: "Suco de Abacaxi com Hortelã", price: 12.0 },
    { name: "Batida de Maracujá", price: 15.0 },
    { name: "Chopp Claro 300ml", price: 10.0 },
    { name: "Chopp Escuro 300ml", price: 11.0 },
    { name: "Porção de Anéis de Lula", price: 38.0 },
    { name: "Petisco Mix do Bar (calabresa, frango e batata)", price: 45.0 },
  ]);
}
