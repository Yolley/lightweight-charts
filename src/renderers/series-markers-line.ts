import { Coordinate } from '../model/coordinate';

import { hitTestSquare } from './series-markers-square';
import { shapeSize } from './series-markers-utils';

export function drawLine(
	ctx: CanvasRenderingContext2D,
	centerX: Coordinate,
	centerY: Coordinate,
	size: number
): void {
	const lineSize = shapeSize('line', size);
	const halfSize = (lineSize - 1) / 2;
	centerY = centerY * 5 as Coordinate;

	ctx.moveTo(centerX - halfSize, 0);
	ctx.lineTo(centerX - halfSize, centerY);
	ctx.lineTo(centerX + halfSize, centerY);
	ctx.lineTo(centerX + halfSize, 0);
	ctx.lineTo(centerX - halfSize, 0);

	ctx.fill();
}

export function hitTestLine(
	centerX: Coordinate,
	centerY: Coordinate,
	size: number,
	x: Coordinate,
	y: Coordinate
): boolean {
	// TODO: implement arrow hit test
	return hitTestSquare(centerX, centerY, size, x, y);
}
