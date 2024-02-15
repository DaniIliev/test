function raft(firstLine, secondLine){

    const N = Number(firstLine[0]);
    const K = Number(firstLine[1]);
    
    const weights = secondLine.map(a => Number(a))
    
    
    if(N < 1 || N > 1000){
        console.log('1 <= N <= 1000')
        return
    }else if(K < 1 || K > 1000){
        console.log('1 <= K <= 1000')
        return
    }
    
    for (const elem of weights) {
        if(elem < 1 || elem > 100000){
            console.log('1 <= Ai <= 100000')
            return
        }
    }
    
    const sortDescWeights = weights.sort((a,b) => b-a);
    let minimumCapacity = sortDescWeights[0];
    
    let arrayWeightsManipulation = sortDescWeights;
    let goatsNumberManipulation = N;
    
        while(true){
            for(let i = 0; i < K; i++){
                let oneKurs = 0;
                let j = 0;
                while(true){
                    oneKurs += arrayWeightsManipulation[j];
                    if(j+1 > goatsNumberManipulation){
                        break;
                    }else if(oneKurs > minimumCapacity){
                        oneKurs -= arrayWeightsManipulation[j]
                        j++
                        continue
                    }
                    arrayWeightsManipulation = arrayWeightsManipulation.filter((y) => y != arrayWeightsManipulation.slice(j, j+1))
                    goatsNumberManipulation--
                }
            }
    
            if(arrayWeightsManipulation.length != 0){
                arrayWeightsManipulation = sortDescWeights;
                goatsNumberManipulation = N;
                minimumCapacity++
            }
    
            if(arrayWeightsManipulation.length == 0){
                console.log(minimumCapacity)
                return minimumCapacity
            }
        }
    }
    
    let firstLine = [20,3];
    let secondLine = [52, 17946, 27160, 387, 17346, 27505, 20816, 20577, 10961, 6021, 5262, 28278, 24163, 931, 11003, 19738, 17914, 1683, 10320, 10475]
    
    // let firstLine = [15,3]
    // let secondLine = [666, 42, 7, 13, 400, 511, 600, 200, 202, 111, 313, 94, 280, 72,42]
    
    // let firstLine = [6,2]
    // let secondLine = [4,8,15,16,23,42]
    
    raft(firstLine,secondLine)