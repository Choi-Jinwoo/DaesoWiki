package com.example.daesowiki.model

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.recyclerview.widget.RecyclerView
import com.example.daesowiki.R
import com.example.daesowiki.SingleLiveEvent
import com.example.daesowiki.model.response.ListData

class SearchAdapter(val context: Context, var list: List<ListData.Post>): RecyclerView.Adapter<SearchAdapter.MyViewHolder>(){

    val onClickEvent = SingleLiveEvent<ListData.Post>()

    inner class MyViewHolder(itemView : View) : RecyclerView.ViewHolder(itemView) {
        val rootView = itemView?.findViewById<ConstraintLayout>(R.id.root_view)
        val heartNum = itemView?.findViewById<TextView>(R.id.heart_num_tv)
        val title = itemView?.findViewById<TextView>(R.id.title_tv)
        val grade = itemView?.findViewById<TextView>(R.id.grade_tv)
        val date = itemView?.findViewById<TextView>(R.id.date_tv)
        val heart = itemView?.findViewById<ImageView>(R.id.heart)

        fun bind(listData: ListData.Post, context: Context){

            heartNum?.text = listData.likeCount.toString()
            title?.text = listData.title
            grade?.text = listData.category.toString()+"학년"
            date?.text = listData.createdAt.substring(0,10)

            heart.setOnClickListener {
                heartNum?.text = (listData.likeCount + 1).toString()
            }

            rootView.setOnClickListener {
                onClickEvent.value = listData
            }
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