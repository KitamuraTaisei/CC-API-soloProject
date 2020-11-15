import { UserController } from "./controller/UserController";

export const Routes = [
  {
    method: "get",
    route: "/diary",
    controller: UserController,
    action: "all",
  },
  {
    method: "get",
    route: "/diary/:id",
    controller: UserController,
    action: "one",
  },
  {
    method: "post",
    route: "/diary",
    controller: UserController,
    action: "save",
  },
  {
    method: "delete",
    route: "/diary/:id",
    controller: UserController,
    action: "remove",
  },
];
