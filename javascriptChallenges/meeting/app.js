let s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";


 meeting = (s) => {
    return s.split(';').map(i => i.toUpperCase().split(':').reverse().join(', ')).sort().map(i => '(' + i + ')').join('')
}

meeting(s);