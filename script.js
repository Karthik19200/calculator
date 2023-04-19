function display(num)
{
    result.value+=num
} 
function cleartext()
{
    result.value =""
}
function evaluateExp()
{
    exp=result.value
    output=eval(exp)
    result.value=output
}
function removelastitem()
{
    x=result.value
    result.value=x.slice(0,-1)
}