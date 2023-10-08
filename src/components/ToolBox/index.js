import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { changeBrushSize, changeColor } from "@/slice/toolBoxSlice";
import cx from 'classnames';
const ToolBox = () => {
  const dispatch = useDispatch();
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const {color} = useSelector((state) => state.toolbox[activeMenuItem]);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption = activeMenuItem === MENU_ITEMS.ERASER || MENU_ITEMS.PENCIL;
  const updateBrushColor = (newColor) => {
    dispatch(changeColor({item : activeMenuItem, color : newColor}));
  };
  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({item : activeMenuItem, size : e.target.value}));
  };
  return (
    <div className={styles.toolBoxContainer}>
      {
        showStrokeToolOption &&
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Stroke Color</h4>
        <div className={styles.itemContainer}>
          <div
            className={cx(styles.colorBox, {[styles.active] : color === COLORS.BLACK})}
            style={{ backgroundColor: COLORS.BLACK }}
            onClick={()=> updateBrushColor(COLORS.BLACK)}
          />
          <div
             className={cx(styles.colorBox, {[styles.active] : color === COLORS.RED})}
            style={{ backgroundColor: COLORS.RED }}
            onClick={()=> updateBrushColor(COLORS.RED)}
          />
          <div
             className={cx(styles.colorBox, {[styles.active] : color === COLORS.GREEN})}
            style={{ backgroundColor: COLORS.GREEN }}
            onClick={()=> updateBrushColor(COLORS.GREEN)}
          />
          <div
             className={cx(styles.colorBox, {[styles.active] : color === COLORS.YELLOW})}
            style={{ backgroundColor: COLORS.YELLOW }}
            onClick={()=> updateBrushColor(COLORS.YELLOW)}
          />
          <div
            className={cx(styles.colorBox, {[styles.active] : color === COLORS.ORANGE})}
            style={{ backgroundColor: COLORS.ORANGE }}
            onClick={()=> updateBrushColor(COLORS.ORANGE)}
          />
        </div>
      </div>
      }
      {
        showBrushToolOption && 
      <div className={styles.toolItem}>
        <h4 className={styles.toolText}>Brush size</h4>
        <div className={styles.itemContainer}>
          <input
            type="range"
            min={1}
            max={10}
            step={1}
            onChange={updateBrushSize}
          />
        </div>
      </div>
      }
    </div>
  );
};

export default ToolBox;
