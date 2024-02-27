const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick()
{
    btn.textContent = 'Done';

});

function displayText()
{
    var text = document.getElementById("sentence");
    if (text.style.display === "none")
    text.style.display = "block";
}

function makeBlue()
{
    document.getElementById("blueList").style.color="blue";
}
