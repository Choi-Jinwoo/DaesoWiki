package com.example.daesowiki

import android.content.Context
import android.content.SharedPreferences

class PreferenceUtil(context: Context) {
    private val prefs: SharedPreferences = context.getSharedPreferences("prefs_name", Context.MODE_PRIVATE)

    fun getId(key: String, defValue: String): String
    {
        return prefs.getString(key, defValue).toString()
    }

    fun setId(key: String, str: String?)
    {
        prefs.edit().putString(key, str).apply()
    }

    fun getPw(key: String, defValue: String): String
    {
        return prefs.getString(key, defValue).toString()
    }

    fun setPw(key: String, str: String?)
    {
        prefs.edit().putString(key, str).apply()
    }

    fun getGrade(key: String, defValue: String): String
    {
        return prefs.getString(key, defValue).toString()
    }

    fun setGrade(key: String, str: String?)
    {
        prefs.edit().putString(key, str).apply()
    }

}