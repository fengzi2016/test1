/**
 * Created by root on 17-7-10.
 */
var collection=
    [
        ["姓名", "语文成绩", "英语成绩", "数学成绩", "编程成绩"],
        ["张三", "95", "80", "75", "80"],
        ["李四", "80", "70", "85", "90"]
    ];
function every_sum(collection) {
    var every_sum_a=[];
    for(var i=1;i<collection.length;i++){
        var sum=0;
        for(var j=1;j<collection[i].length;j++){
            sum+=parseInt(collection[i][j]);
        }
        every_sum_a.push(sum);
    }
    return every_sum_a;
}
/*3:35*/
function all_sum_median(temp_every_sum) {
    for(var i=0;i<temp_every_sum.length-1;i++){
        for(var j=i+1;j<temp_every_sum.length;j++){
            if(temp_every_sum[i]<temp_every_sum[j])
                var temp;
            temp=temp_every_sum[i];
            temp_every_sum[i]=temp_every_sum[j];
            temp_every_sum[j]=temp;
        }
    }
    var count=temp_every_sum.length%2;
    if(count===0){
        var tag=temp_every_sum.length/2;
        var sum_all_sum_median=temp_every_sum[tag-1]+temp_every_sum[tag];
        var all_sum_median_a=sum_all_sum_median/2;
    }
    else{
        tag=(temp_every_sum.length+1)/2;
        all_sum_median_a=temp_every_sum[tag-1];
    }
    return all_sum_median_a;
}
/*7:36*/
function every_average(all_subject,every_sum) {
    var every_average_a=[];
    for(var i=0;i<every_sum.length;i++)
        every_average_a.push(every_sum[i]/all_subject);
    return every_average_a;
}
/*3:09*/
function all_sum_average(every_average) {
    var sum=0;
    var all_sum_average_a;
    for(var i=0;i<every_average.length;i++){
        sum+=every_average[i];
    }
    all_sum_average_a=sum/every_average.length;
    return all_sum_average_a;
}
/*1:55*/
function print(collection,every_sum,every_average,all_sum_average,all_sum_median) {
    var title='成绩单'+'\n';
    var head='';
    for(var i=0;i<collection[0].length;i++){
        head=head+collection[0][i]+'|';
    }
    head=head+'平均分|总分'+'\n';
    var content='';
    for( i=1;i<collection.length;i++){
        for( var j=0;j<collection[i].length;j++){
            content=content+collection[i][j]+'|';
        }
        content+=every_average[i-1]+'|'+every_sum[i-1]+'\n';
    }
    var ge='========================'+'\n';
    var str=title+head+ge+content+ge;
    str=str+'全班总平均分：'+all_sum_average+'\n'+'全班总分中位数：'+all_sum_median;
    return str;
}
var everySum=every_sum(collection);
var temp_every_sum=every_sum(collection);
var allSumMedian=all_sum_median(temp_every_sum);
var all_subject=collection[0].length-1;
var everyAverage=every_average(all_subject,everySum);
var allSumAverage=all_sum_average(everyAverage);
var Print=print(collection,everySum,everyAverage,allSumAverage,allSumMedian);
console.log(Print);
/*11:47*/