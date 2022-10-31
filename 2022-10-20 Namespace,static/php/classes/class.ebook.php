<?php

namespace Cookbook\Books;

class Ebook extends Book
{
  protected $format;

  public function setFormat($format): void
  {
    $this->format = $format;
  }

  public function getFormat(): string
  {
    return $this->format;
  }
}