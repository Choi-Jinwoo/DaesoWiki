package com.example.daesowiki

import android.app.Application

class Myapplication  : Application() {
    companion object
    {
        lateinit var prefs: PreferenceUtil
    }
    override fun onCreate()
    {
        prefs = PreferenceUtil(applicationContext)
        super.onCreate()
    }
}