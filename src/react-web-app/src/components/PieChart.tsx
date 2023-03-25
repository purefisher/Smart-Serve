import ApexCharts from 'apexcharts'
import ReactApexChart from "react-apexcharts";
import {  Card, CardSection, Container, createStyles} from '@mantine/core';
import { ApexOptions } from "apexcharts";
import { CSSProperties } from 'react';

const useStyles = createStyles((theme) => ({
  
    container: {
      marginBottom: 100,
    },
    card: {
      backgroundColor: theme.colors.gray[0],
      transition: 'top ease 0.2s',
      position: 'relative',
      top: 0,
      '&:hover': {
        top: -5,
      },
      cursor: 'pointer',
      borderWidth: 2,
      boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
      width: 550, 
      height: 550,
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    footer: {
      padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },
  }));

function PieChart(props:any){
    const { classes } = useStyles();
    const series = props.series.data
    console.log(series)
      const options: ApexOptions = {
        chart: {
          height: 350,
          type: 'donut',
          toolbar: {show:false}
        },
        // xaxis :{
        //     categories: series.map((item:any)=>item.x)
        // },
        title: {
            text: "Drink Popularity",
            align: 'center',
            style: {
                fontSize:'20px',
            }
        }
      };

    return(
        <Card
        withBorder p='lg' radius='md' className={classes.card} >
            <CardSection mb='md'>
                <ReactApexChart options={options}
                labels={[{ data: series.map((item:any) => item.x) }]}
                series={[{ data: series.map((item:any) => item.y) }]}
                type="donut"
                height={500}
                width={500}/>
            </CardSection>
            
        </Card>
        
        
        
    )
}

export default PieChart