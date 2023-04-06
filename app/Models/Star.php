<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Star extends Model
{
    use HasFactory;
    // allows me to protect other fields (like id, updated_at etc..) only these ones will be
    protected $fillable = ['firstname', 'lastname', 'description', 'src', 'alt'];
}
