const getCurrentDate = async (): Promise<IResponse> => {
  try {
    const response = await fetch(
      "http://worldtimeapi.org/api/timezone/Asia/Tehran"
    );

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

interface IResponse {
  abbreviation: string;
  client_ip: string;
  datetime: string;
  day_of_week: number;
  day_of_year: number;
  dst: boolean;
  dst_from: string;
  dst_offset: number;
  dst_until: string;
  raw_offset: number;
  timezone: string;
  unixtime: number;
  utc_datetime: Date;
  utc_offset: string;
  week_number: number;
}

export default getCurrentDate;
