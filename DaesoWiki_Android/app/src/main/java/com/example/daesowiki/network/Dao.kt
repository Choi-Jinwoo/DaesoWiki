package com.example.daesowiki.network

import com.example.daesowiki.model.request.LoginBody
import com.example.daesowiki.model.response.LoginData
import com.example.daesowiki.model.request.SignUpBody
import com.example.daesowiki.model.request.SearchKeyword
import com.example.daesowiki.model.response.SignUpData
import retrofit2.Call
import retrofit2.http.POST
import retrofit2.http.Body
import retrofit2.http.GET
import retrofit2.http.Query

interface Dao {

    @POST("/api/auth/login")
    fun login(
        @Body loginBody: LoginBody
    ) : Call<LoginData>

    @POST("/api/auth/register")
    fun signUp(
        @Body signUpBody: SignUpBody
    ) : Call<SignUpData>

    @GET("/api/post")
    fun search(
        @Query("keyword") searchKeyword: SearchKeyword
    ) : Call<SearchKeyword>

    @GET("/api/post")
    fun list_get(

    )
}