<?php

namespace Cookbook\Books;

class Book
{
    protected $author;
    protected $title;
    protected $isbn;
    protected $price;
    protected $publisher;
    protected $type;


    public function __construct(string $title, string $author)
    {
        $this->title  = $title;
        $this->author = $author;
    }

    public static function create($title, $author) {
        return new static($title, $author);
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function getAuthor(): string
    {
        return $this->author;
    }

    public function getPrice(): float
    {
        return $this->price;
    }

    public function getPriceWithCurrencySymbol(string $symbol): float
    {
        return $symbol . $this->price;
    }

    public function getPublisher(): string
    {
        return $this->publisher;
    }

    public function getIsbn(): string
    {
        return $this->isbn;
    }

    public function getType(): string
    {
        return $this->type;
    }

    public function setTitle(string $title): void
    {
        $this->title = $title;;
    }

    public function setAuthor(string $author): void
    {
        $this->author = $author;
    }

    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    public function setPublisher(string $publisher): void
    {
        $this->publisher = $publisher;
    }

    public function setIsbn(string $isbn): void
    {
        $this->isbn = $isbn;
    }

    public function setType(string $type): void
    {
        $this->type = $type;
    }

    public function isEbook(): bool
    {
        return $this->type === 'ebook';
    }
}