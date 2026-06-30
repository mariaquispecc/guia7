import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page1.goto('https://www.falabella.com.pe/falabella-pe');
  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('Smart TV Samsung');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');
  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('<script>alert(\'QA-Attack\')</script> Laptop Lenovo');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');

  await page1.getByRole('textbox', { name: 'Search Bar' }).dblclick();
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('ControlOrMeta+a');
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('Zapatillas');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');

  await page1.getByRole('button', { name: 'Precio' }).click();
  await page1.getByRole('checkbox', { name: 'S/ 50 - S/' }).check();
  await page1.goto('https://www.falabella.com.pe/falabella-pe/search?Ntt=Zapatillas&facetSelected=true&f.range.derived.price.search=S%2F+50+-+S%2F+100');

  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('Polos Manga Corta');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');
  await page1.getByRole('button', { name: 'Recomendados' }).click();
  await page1.getByRole('button', { name: 'Precio de menor a mayor' }).click();


  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('ControlOrMeta+a');
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('xyzabc999productofalsonoexistente');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');


  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('ControlOrMeta+a');
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('Nintendo Switch');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');
  await page1.getByRole('button', { name: 'Agregar al Carro', exact: true }).click();
  await page1.getByRole('link', { name: 'Ir al Carro' }).click();
  await page1.goto('https://www.falabella.com.pe/falabella-pe/basket');


  await page1.getByRole('textbox', { name: 'Search Bar' }).click();
  await page1.getByRole('textbox', { name: 'Search Bar' }).fill('Casaca Denim Hombre');
  await page1.getByRole('textbox', { name: 'Search Bar' }).press('Enter');
  await page1.getByRole('button', { name: 'Agregar al Carro', exact: true }).click();
  await page1.getByRole('button', { name: 'S', exact: true }).click();await page.goto('https://www.falabella.com.pe/falabella-pe');
  await page.getByRole('textbox', { name: 'Search Bar' }).click();
  await page.getByRole('textbox', { name: 'Search Bar' }).fill('casaca denim hombre');
  await page.getByRole('textbox', { name: 'Search Bar' }).press('Enter');
  await page.goto('https://www.falabella.com.pe/falabella-pe/product/149591161/Casaca-Denim-Premium-Element%C2%AE-Corte-Moderno-Botones-Inoxidables-y-Tela-100-Durable/149591177');
  await page.getByRole('button', { name: 'Elige tus opciones' }).click();
  await page.getByRole('button', { name: 'S', exact: true }).click();
  await page.locator('#add-to-cart-button-lightbox').click();
  await page.getByRole('button', { name: ' Close' }).click();
  await page.getByRole('button', { name: 'Size S (selected)' }).click();
  await page.getByRole('button', { name: 'Size XL' }).click();
  await page.getByRole('button', { name: 'Size S' }).click();
  await page.getByRole('button', { name: 'Agregar al Carro' }).click();

  await page1.getByRole('button', { name: 'M', exact: true }).click();
  await page1.getByRole('button', { name: 'Agregar al Carro' }).click();
  await page1.getByRole('link', { name: 'Ir al Carro' }).click();
  await page1.locator('section').filter({ hasText: 'Carro(2 productos)Vendido' }).click();
  

  await page1.getByTestId('153009728-new-design-increment-button').click();
  await page1.getByTestId('153009728-new-design-increment-button').click();
  await page1.getByTestId('153009728-new-design-increment-button').click();
  await page1.getByTestId('153009728-menu-button').click();
  await page1.getByTestId('153009728-delete-button').click();
  await page1.getByTestId('129636931-new-design-decrement-button').click();
  await page1.locator('.chakra-stack').first().click();
});


