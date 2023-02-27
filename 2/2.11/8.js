if (-1 || 0) alert('first'); // выполнится, true
if (-1 && 0) alert('second'); // не выполнится, false
if (null || (-1 && 1)) alert('third'); // выполнится, true
