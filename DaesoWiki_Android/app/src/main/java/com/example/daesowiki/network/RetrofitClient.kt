package com.example.daesowiki.network

import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitClient {
    private var instance: Retrofit? = null

    fun getInstance(): Retrofit {
        if (instance == null) {
            instance = Retrofit.Builder()
                .baseUrl("http://10.80.163.165:8000")
                .addConverterFactory(GsonConverterFactory.create())
                .build()
        }
        return instance!!
    }

}