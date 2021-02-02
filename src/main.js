//business logic ----------
import Entry from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';



//UI logic ---------------
$(document).ready(function() {
  $("#journal-form").submit(function(event) {
    event.preventDefault();
    const title = $("#title").val();
    const body = $("#body").val();
    const entry = new Entry(title, body);
    const teaser = entry.getTeaser();
    const wordCount = entry.getNumWords();
    const consVowels = entry.getNumVowels();
    $("#teaser").text(teaser);
    $("#word-count").text(wordCount);
    $("#vowel-count").text(consVowels[0]);
    $("#consonant-count").text(consVowels[1]);
  });
});