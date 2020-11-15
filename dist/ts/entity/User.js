var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
      case 2:
        return decorators.reduceRight(function (o, d) {
          return (d && d(o)) || o;
        }, target);
      case 3:
        return decorators.reduceRight(function (o, d) {
          return d && d(target, key), void 0;
        }, void 0);
      case 4:
        return decorators.reduceRight(function (o, d) {
          return (d && d(target, key, o)) || o;
        }, desc);
    }
  };
var typeorm_1 = require("typeorm");
var User = (function () {
  function User() {}
  __decorate([typeorm_1.PrimaryGeneratedColumn()], User.prototype, "id");
  __decorate([typeorm_1.Column()], User.prototype, "firstName");
  __decorate([typeorm_1.Column()], User.prototype, "lastName");
  __decorate([typeorm_1.Column()], User.prototype, "age");
  User = __decorate([typeorm_1.Entity()], User);
  return User;
})();
exports.User = User;
