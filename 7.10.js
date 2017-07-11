/**
 * Created by root on 17-7-10.
 */
/*every_sum*/
function every_sum(collection) {
    var every_sum=[];
    var sum=0;
    for(var i=0;i<collection.length;i++){
        sum=0;
        for(var j=1;j<5;j++){
            sum=sum+collection[i][j];
        }
       every_sum[i]=sum;
    }
    return every_sum;
}
/*sum*/
function all_sum(collection) {
    var all_sum=0;
    for(var i=0;i<collection.length;i++){
        all_sum=all_sum+collection[i];
    }
    return all_sum;
}
/*average*/
/*input: sum,result.length*/
function all_sum_average(all_sum,lenght){
    return all_sum/lenght;
}
/*median*/
/*input: result result.lenght */
function all_sum_median(result,lenght){
    var all_sum_median;

}
/*every_average*/
function every_average(every_sum,subject){
    var subject_count=subject.length;
    var every_average=[];
    for(var i=0;i<every_sum.length;i++){
        every_average.push(every_sum[i]/subject_count);
    }
    return every_average;

}
/*print*/
function print(collection,average,median) {


}