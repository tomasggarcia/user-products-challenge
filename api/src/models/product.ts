"use strict";

import { Model, Sequelize, UUIDV4 } from "sequelize";

interface ProductAttributes {
    productId: string;
    name: string;
    price: number;
    stock: number;
    image: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Product
        extends Model<ProductAttributes>
        implements ProductAttributes {
        productId!: string;
        name!: string;
        price!: number;
        stock!: number;
        image!: string;

        static associate(models: any) {
            //associations

        }
    }
    Product.init(
        {
            productId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            image: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            sequelize,
            modelName: "Product",
        }
    );
    return Product;
};
