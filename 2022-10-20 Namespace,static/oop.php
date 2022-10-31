<pre>
<?php
// make PHP display errors on screen
ini_set('display_errors', 1);

use Cookbook\Books\Book;
use Cookbook\Books\Ebook;

// require the book and ebook classes
require_once './php/classes/class.book.php';
require_once './php/classes/class.ebook.php';
require_once './php/classes/class.database.php';

$book = new Book(
	'The Hitchhiker\'s Guide to the Galaxy',
	'Douglas Adams'
);

var_dump($book);
echo "\n";
echo "\n";

echo $book->getAuthor();
echo "\n";
echo $book->getTitle();
echo "\n";
echo "\n";

$book->setPrice(10.50);
echo $book->getPrice();
echo "\n";
echo "\n";

$book->setType('ebook');
echo $book->getType();
echo "\n";
var_dump($book->isEbook());
echo "\n";
echo "\n";

$ebook = new Ebook('Form Design Patterns', 'Adam Silver');
$ebook->setFormat('mobi');
var_dump($ebook);
echo "\n";
echo "\n";

$book2 = book::create('test', 'new');
var_dump($book2);


$db = new Database();
?>
</pre>