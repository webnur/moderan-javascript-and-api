
const company = {
    laptop: 'Dell',
    price: 1200,
    web: {
        themeDevelopment: 'wordpress',
        nodeJs: 'react',
        laibary: {
            html: '100%',
            java: '95%'
        }
    },
    description: 'very good laptop',
    quantity: 10,

}

const {laptop, quantity} = company;

console.log(laptop, quantity);

const {themeDevelopment, nodeJs} = company.web;
console.log(themeDevelopment, nodeJs)

const {html, java} = company.web.laibary;
console.log(html, java)