import { Router } from "express";

const subscriptionRouter = Router ();

subscriptionRouter.get("/", (req, res) => res.send({title: "GET all subscription"}));
subscriptionRouter.get("/:id", (req, res) => res.send({title: "GET subscription"}));
subscriptionRouter.post("/", (req, res) => res.send({title: "Create new subscription"}));
subscriptionRouter.put("/:id", (req, res) => res.send({title: "Update subscription"}));
subscriptionRouter.delete("/:id", (req, res) => res.send({title: "DELETE subscription"}));
subscriptionRouter.get("/user/:id", (req, res) => res.send({title: "GET all user subscription"}));
subscriptionRouter.put("/:id/cancel", (req, res) => res.send({title: "Cancel subscription"}));
subscriptionRouter.get("/upcoming-renew", (req, res) => res.send({title: "Renew subscription"}));

export default subscriptionRouter;

