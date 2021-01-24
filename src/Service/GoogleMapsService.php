<?php

namespace App\Service;

use Ivory\GoogleMap\Base\Coordinate;
use Ivory\GoogleMap\Overlay\Animation;
use Ivory\GoogleMap\Overlay\Marker;
use Ivory\GoogleMap\Map;

class GoogleMapsService
{
    public function buildMap($latitude, $longitude, $zoom = 15): Map
    {
        $position = new Coordinate($latitude, $longitude);
        $marker = new Marker($position);
        $marker->setAnimation(Animation::DROP);
        $map = new Map();
        $map->setStylesheetOption('width', '100%');
        $map->setStylesheetOption('height', '100%');
        $map->setCenter($position);
        $map->setMapOption('zoom', $zoom);
        $map->getOverlayManager()->addMarker($marker);

        return $map;
    }
}
