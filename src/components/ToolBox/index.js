import styles from './index.module.css';
import { COLORS } from '@/constants';
const ToolBox = () =>{
    const updateBrushSize =()=>{
    }
    return (
        <div className={styles.toolBoxContainer}>
          <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Stroke Color</h4>
            <div className={styles.itemContainer}>
                <div className={styles.colorBox} style={{backgroundColor : COLORS.BLACK}} />
                <div className={styles.colorBox} style={{backgroundColor : COLORS.RED}} />
                <div className={styles.colorBox} style={{backgroundColor : COLORS.GREEN}} />
                <div className={styles.colorBox} style={{backgroundColor : COLORS.YELLOW}} />
                <div className={styles.colorBox} style={{backgroundColor : COLORS.ORANGE}} />
            </div>

          </div>
          <div className={styles.toolItem}>
            <h4 className={styles.toolText}>Brush size</h4>
            <div className={styles.itemContainer}>
                <input type='range' min={1} max={10} step={1} onChange={updateBrushSize}/>
            </div>
          </div>
        </div>
    )
}

export default ToolBox;