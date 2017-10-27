<?php

use Contentful\Delivery\Client;

require_once __DIR__ . '/vendor/autoload.php';

$spaceID = 'r7o9eh641adw';
$accessToken = '82a212ab3f60811695cf1d75d311ab36efceaeb28410090ac2466f79891f7187';

$client = new Client($accessToken, $spaceID);

$entries = $client->getEntries();

if (count($entries) === 0) {
    echo "Ups, you got no entries in your space. How about creating some?<br />";
} else {
    echo "You have entries with these IDs:<br />";
    foreach ($entries as $entry) {
        echo $entry->getId() . "<br />";
    }
}
