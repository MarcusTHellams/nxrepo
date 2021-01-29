import React, { useEffect, useState, PropsWithRef } from 'react';

import './store-feature-game-detail.module.scss';
import { useParams } from 'react-router-dom';
import { getGame } from '../../../../../apps/store/src/fake-api/index';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

/* eslint-disable-next-line */
export interface StoreFeatureGameDetailProps {}

export const StoreFeatureGameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<{
    id: string;
    name: string;
    image: string;
    description: string;
    price: number;
    rating: number;
  }>();

  useEffect(() => {
    const game = getGame(id);
    setGame(game);
  }, [id]);

  return (
    <div className="container">
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {game?.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default StoreFeatureGameDetail;
