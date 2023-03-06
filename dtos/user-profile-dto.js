module.exports = class UserProfileDto {
    id;
    email;
    isActivated;
    roles;
    firstName;
    lastName;
    city;
    post;
    avatar;
    username;

    constructor(model) {
        this.id = model._id;
        this.email = model.email;
        this.isActivated = model.isActivated;
        this.roles = model.roles;
        this.firstName = model.firstName;
        this.lastName = model.lastName;
        this.city = model.city;
        this.post = model.post
        this.avatar = model.avatar;
        this.username = model.username;
    }
}