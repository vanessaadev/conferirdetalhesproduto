import React from "react";
import { Grid, Card } from "@mui/material";
import { useParams } from "react-router-dom";
import sapato01 from "./img/sapato1.webp";
import sapato02 from "./img/sapato2.jpg";
import sapato03 from "./img/sapato3.jpg";
import sapato04 from "./img/sapato4.jpg";
import sapato05 from "./img/sapato5.jpg";

export default function DetalhesProduto() {
  const { id } = useParams();
  const {atual, setAtual} = React.useState(0);


    const imagens = [
        sapato01,
        sapato02,
        sapato03,
        sapato04,
        sapato05,
    ];
 
    const Items = () => {
        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)}>
                        {posicao}
                        <img src={sapato01} width="100%"/>
                    </Card>
                </Grid>
            )
        }); //items
}

  return (
    <div>
      Detalhes do Produto {id}
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <Card align="center">
            <img width="400px" src={imagens[atual]}/>
          </Card>
        </Grid>

        <Grid container spacing={2}>
            <Items/> 
        </Grid>
               
      </Grid>
    </div>
  );
}
