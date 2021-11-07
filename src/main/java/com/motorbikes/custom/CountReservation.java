/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.motorbikes.custom;

import com.motorbikes.model.Reservation;

/**
 *
 * @author Grupo34Grupo8
 */
public class CountReservation {
    private Integer total;
    private Reservation reservation;

    public CountReservation(Integer total, Reservation reservation) {
        this.total = total;
        this.reservation = reservation;
    }

    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }
    
}
