package com.example.Controller;

import com.example.Model.Painting;
import com.example.Service.PaintingService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import io.javalin.Javalin;
import io.javalin.http.Context;

public class PaintingController {

    static PaintingService paintingService = new PaintingService();

    public PaintingController() {
        this.paintingService = new PaintingService();
        System.out.println("Painting Controller called...");
    }

    // public Javalin getAPI() {
    //     Javalin app = Javalin.create();
    //     app.post("/painting", PaintingController::postHandler);
    // }




    public static void postHandler(Context ctx) {
        String requestJson = ctx.body();
        ObjectMapper om = new ObjectMapper();
        try {
            Painting painting = om.readValue(requestJson, Painting.class);
            Painting persistedPainting = paintingService.savePaintingAndReturn(painting);
            ctx.json(persistedPainting);
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
    }

    
}
