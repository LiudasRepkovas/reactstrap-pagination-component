# About
I created this for one of my projects, and reused it a few times and decided it might be useful to someone. So enjoy.

# Dependecies
This obviously requires react and reactstrap.  I might later create an npm module with package.json.

# API
This component needs few props passed to work properly. 

<b>sidePageNumbersToShow\<number> </b> - How many clickable squares with numbers you want to see on each side of square with current page number. Defaults to 2.

<b>changePageCallback\<function(pageNumber)></b> - Function you want to be called when current page changes. Required.

<b>pageCount\<number></b> - Component needs to know your total page count. Required.

<b>currentPage\<number></b> - current page. Required.

