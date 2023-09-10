package com.example.Service;

import com.example.DAO.PaintingDAO;
import com.example.Model.Painting;

public class PaintingService {

    PaintingDAO paintingDAO;

    public PaintingService() {
        this.paintingDAO = new PaintingDAO();
        System.out.println("PaintingService called...");
    }

    public Painting savePaintingAndReturn(Painting painting) {
        int id = paintingDAO.savePaintingReturnId(painting);
        Painting persistedPainting = paintingDAO.getPaintingById(id);
        return persistedPainting;
    }

    public Painting getPaintingById(int id) {

        Painting paintingObj = paintingDAO.getPaintingById(id);
        if (paintingObj != null) {
            return paintingObj;
        } else {
            return null;
        }
    }

}
