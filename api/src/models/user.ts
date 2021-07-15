'use strict';

import { Model, UUIDV4 } from 'sequelize';


// These are all the attributes in the User model
interface UserAttributes {
    userId: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string

}

module.exports = (sequelize: any, DataTypes: any) => {
    class User extends Model<UserAttributes> implements UserAttributes {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        userId!: string;
        email!: string;
        firstName!: string;
        lastName!: string;
        password!: string

        static associate(models: any) {

        }
    }
    User.init(
        {
            userId: {
                type: DataTypes.UUID,
                defaultValue: UUIDV4,
                allowNull: false,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: 'User',
        },
    );
    return User;
};
