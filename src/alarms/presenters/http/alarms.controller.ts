import { Request, Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmCommand } from '../../application/commands/create-alarm.command';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarms')
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @Post('')
  create(@Request() request: any, @Body() createAlarmDto: CreateAlarmDto) {
    console.log('alarms.controller.ts - request:', request);
    console.log('alarms.controller.ts - body', createAlarmDto);
    return '';
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }

  @Post(':id')
  createTest(
    @Request() request: any,
    @Body() createAlarmDto: CreateAlarmDto,
    @Param('id') id: string,
  ) {
    console.log('alarms.controller.ts - request:', request);
    console.log('alarms.controller.ts - param.id:', id);
    console.log('alarms.controller.ts - body', createAlarmDto);
    return '';
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }

  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
