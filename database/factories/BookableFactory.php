<?php

namespace Database\Factories;

use App\Models\Bookable;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Arr;

class BookableFactory extends Factory
{

  protected $suffix = [
    'Villa',
    'House',
    'Cottage',
    'Luxury Villas',
    'Cheap House',
    'Rooms',
    'Cheap Rooms',
    'Luxury Rooms',
    'Fancy Rooms'
  ];

  /**
   * The name of the factory's corresponding model.
   *
   * @var string
   */
  protected $model = Bookable::class;

  /**
   * Define the model's default state.
   *
   * @return array
   */
  public function definition()
  {
    return [
      'title' => $this->faker->city . ' ' . Arr::random($this->suffix),
      'description' => $this->faker->text(),
    ];
  }
}
