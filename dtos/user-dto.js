module.exports = class UserDto {
    id;
    email;
    isActivated;
    roles;
    firstName;
    username;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
        this.isActivated = model.isActivated;
        this.roles = model.roles;
        this.firstName = model.firstName;
        this.username = model.username;
    }
}