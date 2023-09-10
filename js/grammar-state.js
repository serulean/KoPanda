var state_gram = document.getElementById('state-num-gram').innerText;
var state_sen = document.getElementById('state-num-sen').innerText;

var gram_good = document.getElementById('good-gram');
var gram_bad = document.getElementById('bad-gram');
var sen_good = document.getElementById('good-sen');
var sen_bad = document.getElementById('bad-sen');

state_gram *= 1;
state_sen *= 1;

// 동그라미 색 변화
if (state_gram !== 0) {
    gram_good.style.backgroundColor  = '#4d9957';
} else {
    gram_bad.style.backgroundColor  = '#f76969';
}

if (state_sen !== 0) {
    sen_good.style.backgroundColor  = '#4d9957';
} else {
    sen_bad.style.backgroundColor  = '#f76969';
}
