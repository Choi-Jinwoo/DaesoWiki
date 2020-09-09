package com.example.daesowiki.model

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.daesowiki.R
import com.example.daesowiki.model.response.ListData

class SearchAdapter(val context: Context, var list: List<ListData.Post>): RecyclerView.Adapter<SearchAdapter.MyViewHolder>(){

    class MyViewHolder(itemView : View) : RecyclerView.ViewHolder(itemView) {
        val heartNum = itemView?.findViewById<TextView>(R.id.heart_num_tv)
        val title = itemView?.findViewById<TextView>(R.id.title_tv)
        val grade = itemView?.findViewById<TextView>(R.id.grade_tv)
        val date = itemView?.findViewById<TextView>(R.id.date_tv)

        fun bind(listData: ListData.Post, context: Context){
            heartNum?.text = listData.idx.toString()
            title?.text = listData.title
            grade?.text = listData.category.toString()
            date?.text = listData.createdAt
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MyViewHolder {
        val view = LayoutInflater.from(context).inflate(R.layout.list_item, parent, false)//여기 내일
        return MyViewHolder(view)
    }

    override fun getItemCount(): Int {
        return if(list == null) 0 else {
            list.size
        }
    }

    override fun onBindViewHolder(holder: MyViewHolder, position: Int) {
        holder?.bind(list[position], context)
    }
}